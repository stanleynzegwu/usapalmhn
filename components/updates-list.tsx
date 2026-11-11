"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import updates from "@/data/updates.json"

type Update = (typeof updates)[number]
const labels: Record<string, string> = { event: "Event", campaign: "Campaign", program: "Programme", network: "Partner Network" }
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dateOf = (value: string) => new Date(`${value}T00:00:00`)
const dateLabel = (item: Update) => {
  const start = dateOf(item.date)
  const end = item.dateEnd ? dateOf(item.dateEnd) : null
  if (!end) return `${months[start.getMonth()]} ${start.getDate()}`
  return start.getMonth() === end.getMonth()
    ? `${months[start.getMonth()]} ${start.getDate()}–${end.getDate()}`
    : `${months[start.getMonth()]} ${start.getDate()} – ${months[end.getMonth()]} ${end.getDate()}`
}

function UpdateCard({ item, ongoing = false }: { item: Update; ongoing?: boolean }) {
  const date = dateOf(item.date)
  const meta = [item.host, item.when, item.where].filter(Boolean)
  const external = item.link?.startsWith("http") || item.link?.startsWith("mailto:")
  return <article className={`upd-card${ongoing ? "" : ""}`} data-category={item.category}>
    <div className={`upd-date${ongoing ? " upd-date-ongoing" : ""}`} aria-hidden="true">{ongoing ? <span className="upd-mon">Now</span> : <><span className="upd-mon">{months[date.getMonth()].slice(0, 3)}</span><span className="upd-day">{date.getDate()}</span></>}</div>
    <div className="upd-body"><span className={`upd-tag upd-${item.category}`}>{labels[item.category] || item.category}</span><h3>{item.title}</h3>
      {meta.length > 0 && <div className="upd-meta">{meta.map((entry, i) => <span key={i}>{i > 0 && <span> · </span>}{entry}</span>)}</div>}
      {item.body && <p>{item.body}</p>}{item.link && (external ? <a className="upd-link cursor-pointer" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel || "Learn more"} →</a> : <Link className="upd-link cursor-pointer" href={item.link}>{item.linkLabel || "Learn more"} →</Link>)}
    </div>
  </article>
}

export function UpdatesList() {
  const [filter, setFilter] = useState("all")
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const { ongoing, upcoming, past, dated } = useMemo(() => {
    const ongoingItems = updates.filter((item) => item.ongoing)
    const datedItems = updates.filter((item) => !item.ongoing)
    return {
      ongoing: ongoingItems,
      dated: datedItems,
      upcoming: datedItems.filter((item) => dateOf(item.dateEnd || item.date) >= today).sort((a, b) => dateOf(a.date).getTime() - dateOf(b.date).getTime()),
      past: datedItems.filter((item) => dateOf(item.dateEnd || item.date) < today).sort((a, b) => dateOf(b.date).getTime() - dateOf(a.date).getTime()),
    }
  }, [])
  const visible = (item: Update) => filter === "all" || item.category === filter
  const groupedPast = past.reduce<{ key: string; items: Update[] }[]>((groups, item) => {
    const date = dateOf(item.date)
    const key = `${date.getFullYear()}-${date.getMonth()}`
    const last = groups[groups.length - 1]
    if (last?.key === key) last.items.push(item)
    else groups.push({ key, items: [item] })
    return groups
  }, [])
  const filters = [["all", "All"], ["event", "Events"], ["campaign", "Campaigns"], ["program", "Programmes"], ["network", "Partner Networks"]]
  return <>
    <div className="upd-toolbar"><div className="upd-filters" role="group" aria-label="Filter updates by type">{filters.map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} className={`filter-btn cursor-pointer${filter === value ? " active" : ""}`} onClick={() => setFilter(value)}>{label}</button>)}</div><div className="upd-count" aria-live="polite">{dated.length} entries · {ongoing.length} ongoing</div></div>
    <div className="upd-results">
      <section className="upd-section"><h2 className="upd-h2">Upcoming</h2>{upcoming.filter(visible).length ? <div className="upd-list">{upcoming.filter(visible).map((item, i) => <UpdateCard key={`${item.date}-${i}`} item={item} />)}</div> : <p className="upd-empty">{filter === "all" ? <>Nothing on the calendar right now. <Link href="/get-involved/#join">Join the network</Link> to hear about the next one first.</> : "No upcoming updates in this category."}</p>}</section>
      {ongoing.some(visible) && <section className="upd-section"><h2 className="upd-h2">Ongoing campaigns &amp; programmes</h2><div className="upd-list">{ongoing.filter(visible).map((item, i) => <UpdateCard key={`${item.title}-${i}`} item={item} ongoing />)}</div></section>}
      {groupedPast.some((group) => group.items.some(visible)) && <section className="upd-section"><h2 className="upd-h2">Archive</h2>{groupedPast.map((group) => {
        const items = group.items.filter(visible)
        if (!items.length) return null
        const [year, month] = group.key.split("-").map(Number)
        return <div key={group.key}><h3 className="upd-month">{months[month]} {year}</h3><div className="upd-list">{items.map((item, i) => <UpdateCard key={`${item.date}-${i}`} item={item} />)}</div></div>
      })}</section>}
    </div>
  </>
}
