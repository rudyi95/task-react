import React, { useContext } from 'react'
import {
  Accordion,
  AccordionCollapse,
  AccordionContext,
  Card,
  useAccordionButton,
} from 'react-bootstrap'
import styles from './AccordionAnswer.module.scss'

interface CustomToggleProps {
  eventKey: string
}
const CustomToggle: React.FC<CustomToggleProps> = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey)

  return (
    <button type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  )
}

interface AccordionAnswerProps {
  answer: string
}

const AccordionAnswer: React.FC<AccordionAnswerProps> = ({ answer }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <div style={{ display: 'none' }}>
        <Card className={styles.navitem}>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    </Accordion>
  )
}

export default AccordionAnswer
