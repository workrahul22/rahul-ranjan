import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2025 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Azuga, Bangalore</h4>
            <p>
              Designed and implemented an ingestion pipeline for quiclink device using AWS IoT core, AWS Lambda, MSK, AuroraDB(MySQL)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Apr 2025 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SDE3 | Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Automint, Goa Panjim</h4>
            <ul>
              <li>Designed and implemented a dynamic order management system leveraging the n8n workflow engine to automate diverse leasing processes based on configurable parameters.</li>
              <li>Developed and launched a secure user login journey, improving authentication flows and data security.</li>
              <li>Engineered a tax-saving calculation module for car and device leases, providing users with accurate financial insights.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer 3</h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia (Remote)</h4>
            <ul>
              <li>Collaborated with Engineering Managers and Software Architects to design innovative features, reducing system errors.</li>
              <li>Improved application performance by 20% through development, code quality analysis, and load testing.</li>
              <li>Designed and implemented an auto-recurring subscription model using in-app coins, including an event scheduler for automated renewals.</li>
              <li>Built a comprehensive moderation system for multiple Noice app entities leveraging Pub/Sub for real-time moderation in live audio streams.</li>
              <li>Integrated Android and Apple in-app purchases (consumable products) using respective platform SDKs.</li>
              <li>Developed a Diamond Withdrawal Process through the Iris.</li>
              <li>Created the "Sending Gifts" feature, allowing users to send monetary gifts to creators during live audio interactions.</li>
              <li>Developed an in-app currency system enabling Coins and Diamonds for premium content and subscriptions.</li>
              <li>Migrated audio/video transcoding from Bitmovin to Tencent, optimizing performance and reducing operational costs.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia (Remote)</h4>
            <ul>
              <li>Reduced application latency by 60% by optimizing MySQL queries, cutting execution time from seconds to milliseconds and significantly improving user experience.</li>
              <li>Implemented a Redis caching layer, reducing latency by 50% and improving system reliability by 20%.</li>
              <li>Optimized the event-driven notification service, reducing system downtime by 25% and improving scalability.</li>
              <li>Tech stack: Node.js, Nest.js, GCP, MySQL, MongoDB, Kafka, Redis.</li>
              <li>Designed and built the Noicemaker Plus platform using BigQuery, MongoDB, Kafka, and Nest.js, enabling creators to upload, claim, and analyze content with detailed audience insights.</li>
              <li>Developed an RSS syncing process to increase content volume on the Noice platform.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="DEC 2020 - DEC 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia (Remote)</h4>
            <ul>
              <li>Implemented a Kafka integration decorator in Nest.js to improve maintainability and scalability.</li>
              <li>Designed and built a notification system from scratch using Nest.js, Kafka, and MongoDB to improve user retention and engagement.</li>
              <li>Developed a CMS for the Noice audio streaming app using React.js and Nest.js for seamless management of banners, segments, catalogs, and content.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2020 - Dec 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Gurgaon, India</h4>
            <ul>
              <li>Contributed to architectural design discussions, feature planning, and key technical decisions to improve application scalability and performance.</li>
              <li>Mentored junior engineers on best practices, coding standards, and engineering processes.</li>
              <li>Designed and developed the food seller onboarding flow to ensure a seamless registration experience.</li>
              <li>Built a system enabling buyers to discover nearby food sellers and schedule orders efficiently.</li>
              <li>Designed and implemented the policy purchase journey for the MaxBupa application.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2017 - Jan 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <ul>
              <li>Designed and developed the Sensenuts IoT platform using Node.js, MQTT, and MongoDB to enable device provisioning, configuration, monitoring, and control.</li>
              <li>Built a real-time data communication system leveraging the MQTT protocol for efficient command transmission and data retrieval from IoT devices.</li>
              <li>Tech stack: Node.js, AWS, MongoDB, Redis, MQTT.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2017 - Jan 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <ul>
              <li>Developed a server for peer-to-peer connections using TCP and UDP hole-punching techniques to enable seamless communication.</li>
              <li>Designed and implemented a multimedia transmission system delivering video and audio payloads over RTP/RTCP using MJPEG codecs for efficient streaming.</li>
              <li>Tech stack: Python, JavaScript, AWS, MySQL, MongoDB.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2017 - Jan 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <ul>
              <li>Integrated Ola, Uber, and Jugnoo APIs to allow users to compare fares and book rides seamlessly within the platform.</li>
              <li>Tech stack: Ruby on Rails, MySQL, DigitalOcean.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;