import React, { useState } from "react"
import StatCard from "../../StatCard/StatCard"
import "./Dashboard.scss"
import {
  faHotel,
  faUsers,
  faSchool,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import PerformanceCard from "./PerformanceCard"

function Dashboard() {
  const [value, onChange] = useState(new Date())
  return (
    <div className="dashBorad-container">
      <div className="content-row">
        <StatCard
          borderColor="rgb(242, 153, 147)"
          title="Schools"
          width={"23%"}
          icon={faHotel}
        />
        <StatCard
          icon={faSchool}
          borderColor="#5b4f8e"
          title="Colleges"
          width={"23%"}
        />
        <StatCard
          icon={faUsers}
          borderColor="#ffc100"
          title="Students"
          width={"23%"}
        />
        <StatCard
          icon={faChalkboardTeacher}
          borderColor="#3fb65e"
          title="Teachers"
          width={"23%"}
        />
      </div>
      <div className="content-row">
        <div className="calendar-container">
          <Calendar value={value} className="class3" onChange={onChange} />
        </div>
        <PerformanceCard />
      </div>
    </div>
  )
}

export default Dashboard
