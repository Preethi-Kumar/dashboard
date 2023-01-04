import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'

function Header({ sidebarToggle }) {
  return (
    <>
      <Navbar expand='lg'>
        <Container fluid>
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
            <h3 className='title'>Dashboard</h3>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link>
                  <FontAwesomeIcon
                  className='toggleIcon'
                  width='20'
                  height='22'
                  icon={faMagnifyingGlass}
                />
                </Nav.Link>
                <Nav.Link>
                  <img className='americanFlag' src='/images/united-states-of-america.png' />
                </Nav.Link>
                
                <Nav.Link>

                    <FontAwesomeIcon
                    className='toggleIcon'
                    width='20'
                    height='22'
                    icon={faBell}
                  />

                </Nav.Link>

                <Nav.Link>

                    <FontAwesomeIcon
                    className='toggleIcon'
                    width='20'
                    height='22'
                    icon={faGear}
                  />

                </Nav.Link>

                <Nav.Link>

                    <img src='/images/avatar.jpeg' className='profile-pic' />

                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
