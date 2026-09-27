import React from "react";
import { motion } from "framer-motion";
import s1 from "../../../assets/students/student_1.jpg";
import s2 from "../../../assets/students/student_2.jpg";
import s3 from "../../../assets/students/student_3.jpg";
import s4 from "../../../assets/students/student_4.jpg";
import s5 from "../../../assets/students/student_5.jpg";
import s6 from "../../../assets/students/student_6.jpg";
import s7 from "../../../assets/students/student_7.jpg";
import s8 from "../../../assets/students/student_8.jpg";
import s9 from "../../../assets/students/student_9.jpg";
import s10 from "../../../assets/students/student_10.jpg";
import s11 from "../../../assets/students/student_11.jpg";
import s12 from "../../../assets/students/student_12.jpg";
import "./PlacedStudentsSection.css";

// Row 1 Students
const ROW_1_STUDENTS = [
  { id: 1, name: "Rahul Sharma", company: "@ Amazon", image: s1 },
  { id: 2, name: "Priya Patel", company: "@ Google", image: s2 },
  { id: 3, name: "Aditya Verma", company: "@ Microsoft", image: s3 },
  { id: 4, name: "Sneha Reddy", company: "@ Adobe", image: s4 },
  { id: 5, name: "Vikram Singh", company: "@ Swiggy", image: s5 },
  { id: 6, name: "Ananya Joshi", company: "@ Oracle", image: s6 },
];

// Row 2 Students
const ROW_2_STUDENTS = [
  { id: 7, name: "Rohan Gupta", company: "@ Uber", image: s7 },
  { id: 8, name: "Tanvi Mehta", company: "@ Meta", image: s8 },
  { id: 9, name: "Ayush Mishra", company: "@ Flipkart", image: s9 },
  { id: 10, name: "Ritu Saxena", company: "@ Autodesk", image: s10 },
  { id: 11, name: "Kunal Nair", company: "@ Cisco", image: s11 },
  { id: 12, name: "Pooja Choudhary", company: "@ Zomato", image: s12 },
];

function StudentCard({ student }) {
  return (
    <div className="placed-student-card">
      {/* Background Yellow Aura */}
      <div className="placed-card-glow" />

      {/* Repeating Watermark Behind Person */}
      <div className="placed-watermark-row">
        <span>PLACED</span>
        <span>PLACED</span>
        <span>PLACED</span>
      </div>

      {/* Student Portrait Image */}
      <img
        src={student.image}
        alt={student.name}
        className="placed-student-img"
        loading="lazy"
      />

      {/* Foreground Overlay Badge */}
      <div className="placed-card-overlay">
        <div className="placed-text-block">
          <span className="placed-main-title">PLACED</span>
          <span className="placed-sub-brand">T H I R D &nbsp; E Y E</span>
        </div>
        {student.company && (
          <span className="placed-company-badge">{student.company}</span>
        )}
      </div>
    </div>
  );
}

export default function PlacedStudentsSection() {
  // Seamless loop by duplicating arrays
  const row1Track = [...ROW_1_STUDENTS, ...ROW_1_STUDENTS, ...ROW_1_STUDENTS];
  const row2Track = [...ROW_2_STUDENTS, ...ROW_2_STUDENTS, ...ROW_2_STUDENTS];

  return (
    <section className="placed-students-section">
      {/* Ambient Spotlight */}
      <div className="placed-section-glow" />

      {/* Section Header */}
      <div className="placed-header">
        <motion.div
          className="placed-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="placed-pulse-dot" />
          <span>PROVEN CAREER TRANSFORMATIONS</span>
        </motion.div>

        <motion.h2
          className="placed-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet Our Placed Students
        </motion.h2>

        <motion.p
          className="placed-subtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          From classroom learners to high-impact professionals at top global studios & tech giants
        </motion.p>
      </div>

      {/* Dual Marquee Track Container */}
      <div className="placed-marquee-container">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="placed-edge-mask mask-left" />
        <div className="placed-edge-mask mask-right" />

        {/* Row 1: Scrolling Left (Stops on hover) */}
        <div className="placed-marquee-row row-left">
          <div className="placed-marquee-track track-left">
            {row1Track.map((student, idx) => (
              <StudentCard key={`row1-${student.id}-${idx}`} student={student} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Stops on hover) */}
        <div className="placed-marquee-row row-right">
          <div className="placed-marquee-track track-right">
            {row2Track.map((student, idx) => (
              <StudentCard key={`row2-${student.id}-${idx}`} student={student} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
