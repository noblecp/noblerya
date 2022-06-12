import React from "react"
import "../styles/timeline.css"

import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Typography from "@mui/material/Typography"

const TimelineSection = ({ data }) => {
  const timelineData = data.graphCmsData.timelines[0]
  return (
    <div className="timeline-container global_container global_padding">
      <div className="timeline-content">
        <p className="global_section-title">{timelineData.sectionHeader}</p>
        <div className="timeline-allitems">
          <Timeline position="alternate">
            {timelineData.timelineItems.map(el => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {el.timestamp}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant={el.filled ? "filled" : "outline"} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h6"
                      component="span"
                      style={{ fontWeight: "bold" }}
                    >
                      {/* <p className="global_paragraph-text"> */}
                      {el.title}
                      {/* </p> */}
                    </Typography>

                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: el.description.html,
                      }}
                      className="global_paragraph-text-small"
                    ></Typography>
                  </TimelineContent>
                </TimelineItem>
              )
            })}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection
