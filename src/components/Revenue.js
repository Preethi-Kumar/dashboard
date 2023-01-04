import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart,faUser,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Revenue = () => {
  return (
    <>
      <Row>
        <Col xl={4} lg={6} md={6} sm={6}  className='detail-section mb-3'>
          <div className='d-flex detail-card'>
            <div className='d-flex align-items-center'>
              <div className='symbol'>
                <FontAwesomeIcon
                  className='toggleIcon'
                  width='18'
                  height='16'
                  icon={faPieChart}
                />
              </div>
              <div className='symbol-content'>
                <div>
                  <p>Revenue</p>
                  <h4>$21,456</h4>
                </div>
              </div>
            </div>
            <div className='symbol-value'>
              <p className='text-white'>+25.6%</p>
            </div>
          </div>
        </Col>

        <Col xl={4} lg={6} md={6} sm={6}  className='detail-section mb-3'>
          <div className='d-flex detail-card'>
            <div className='d-flex align-items-center'>
              <div className='symbol'>
                <FontAwesomeIcon
                  className='toggleIcon'
                  width='18'
                  height='16'
                  icon={faBagShopping}
                />
              </div>

              <div className='symbol-content'>
                <div>
                  <p>Orders</p>
                  <h4>5,643</h4>
                </div>
              </div>
            </div>

            <div className='symbol-value danger'>
              <p className='text-white'>+25.6%</p>
            </div>
          </div>
        </Col>

        <Col xl={4} lg={6} md={6} sm={6}  className='detail-section mb-3'>
          <div className='d-flex detail-card'>
            <div className='d-flex align-items-center'>
              <div className='symbol'>
                <FontAwesomeIcon
                  className='toggleIcon'
                  width='18'
                  height='16'
                  icon={faUser}
                />
              </div>

              <div className='symbol-content'>
                <div>
                  <p>Customers</p>
                  <h4>45,254</h4>
                </div>
              </div>
            </div>

            <div className='symbol-value danger'>
              <p className='text-white'>+25.6%</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Revenue
