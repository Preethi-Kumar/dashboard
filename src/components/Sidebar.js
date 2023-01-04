import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCalendarDays,
  faDashboard,
  faMessage,
  faFile,
  faStore,
  faMailBulk,
  faFileAlt,
  faPhone,
  faUserAlt,
  faBox,
  faBoxesStacked,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'

function Sidebar({ sidebarToggle, toggleCheck }) {
  return (
    <>
      <nav className={`sidebar ${toggleCheck}`}>
        <div className='d-flex toogleContainer'>
          <button
            id='sidebarToggle'
            onClick={() => sidebarToggle()}
            className='btn btn-link rounded-circle mr-3'
          >
            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faBars}
            />
          </button>
        </div>

        <p className='menu-title'>Menu</p>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header className='sidebarHeading'>
              <FontAwesomeIcon
                className='toggleIcon'
                width='18'
                height='16'
                icon={faDashboard}
              />
              <p>Dashboards</p>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <p className='menu-title'>Applications</p>

          <div className='d-flex align-items-center menuSubHeading'>
            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faCalendarDays}
            />
            <p>Calendar</p>
          </div>

          <div className='d-flex align-items-center menuSubHeading'>
            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faMessage}
            />
            <p>Chat</p>
          </div>

          <div className='d-flex align-items-center menuSubHeading'>
            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faFile}
            />
            <p>File Manager</p>
          </div>

          <Accordion.Item eventKey='1'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faStore}
            />
              
              <p>Ecommerce</p>

            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faMailBulk}
            />
              
              <p>Email</p>
            </Accordion.Header>

            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faFileAlt}
            />
              
              <p>Invoice</p>
              
              </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='4'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faPhone}
            />
              
              <p>Contact</p>
              
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <p className='menu-title'>Layouts</p>
          <p className='menu-title'>Pages</p>

          <div className='d-flex align-items-center menuSubHeading'>
            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faUserAlt}
            />
            <p>Authentication</p>
          </div>

          <Accordion.Item eventKey='5'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faBox}
            />
              
              <p>Utility</p>
              
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <p className='menu-title'>Components</p>

          <Accordion.Item eventKey='6'>

            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faBoxesStacked}
            />

              
              <p>UI Elements</p>
              
              </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='7'>
            <Accordion.Header className='sidebarHeading'>

            <FontAwesomeIcon
              className='toggleIcon'
              width='18'
              height='16'
              icon={faNewspaper}
            />
              
              <p>Forms</p></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </nav>
    </>
  )
}

export default Sidebar
