import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import { UserData } from '../data/data'
import { UserActivityData } from '../data/userActivityData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table'
import LineChart from './LineChart'
import Form from 'react-bootstrap/Form'

const Overview = () => {
  const [userData, setUserData] = useState({
    labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
    datasets: [
      {
        label: 'users gained',
        data: [18,21,18,30,25,27,35,21,18],
        backgroundColor: ["#f2f4f8"],
        borderRadius: 4,
        barPercentage: 0.5
      },
      {
        label: 'users gained',
        data: [21,23,38,30,28,30,18,21,18],
        backgroundColor: ["#457ce2"],
        borderRadius: 4,
        barPercentage: 0.5
      },
    ],
  })
  const [userActivityData, setUserActivityData] = useState({
    labels: ['1st','2nd','3rd','4th','5th'],
    datasets: [
      {
        label: 'Current',
        data: [0,40,20,80,25,100],
        fill: true,
        backgroundColor: "rgb(215, 227, 249,0.7)",
        borderRadius: 4,
        lineTension: 0.4,
      },
      {
        label: 'Previous',
        data: [10,30,50,20,53,70],
        backgroundColor: "rgb(251, 225, 224,0.7)",
        borderRadius: 4,
        fill: true,
        lineTension: 0.4
      },
    ],
  })

  const donut = {
    labels: ['Completed','Pending','Cancel'],
    datasets: [
      {
        label: 'Completed',
        data: [60,30,10],
        fill: true,
        backgroundColor: ["#447de3","#f4f6f9","#f47a7b"],
        borderRadius: 4,
        lineTension: 0.4,
      },
    ],
  }
  return (
    <>
      <Row>
      <Col lg={12} md={12} sm={12}>
      <Card className='mt-2 chartCard'>
        <Card.Header>
          Overview
          <div className='d-flex align-items-center sortBy'>
            Sort By :
            <Form.Select size="sm">
              <option>Yearly</option>
            </Form.Select>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>

            <Col xl={4} lg={12} md={12} sm={12}>
              <div className='month-revenue'>
                <p className='mb-0'>Revenue</p>
                <h4>$21,456</h4>
              </div>

              <Table striped bordered hover className='mt-4'>
                <tbody>
                  <tr className='border-top-unset'>
                    <td className='border-left-unset'>
                      <p className='mb-0 table-tile'>Orders</p>
                      <p className='table-rate'>21,456</p>
                    </td>

                    <td className='border-right-unset'>
                      <p className='mb-0 table-tile'>Sales</p>
                      <p className='table-rate'>1,456 </p>
                    </td>
                  </tr>

                  <tr>
                    <td  className='border-left-unset'>
                      <p className='mb-0 table-tile'>Order value</p>
                      <p className='table-rate'>12.3% </p>
                    </td>

                    <td className='border-right-unset'>
                      <p className='mb-0 table-tile'>Customers</p>
                      <p className='table-rate'>21,456 </p>
                    </td>
                  </tr>

                  <tr className='border-bottom-unset'>
                    <td className='border-left-unset '>
                      <p className='mb-0 table-tile'>Income</p>
                      <p className='table-rate'>$ 31,456 </p>
                    </td>

                    <td className='border-right-unset'>
                      <p className='mb-0 table-tile'>Expenses</p>
                      <p className='table-rate'>$ 44,467 </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col xl={8} lg={12} md={12} sm={12}>
              <BarChart chartData={userData} />
            </Col>

          </Row>

        </Card.Body>
      </Card>
      </Col>
      </Row>

      <Row className='mt-2'>
        <Col lg={4} md={6} sm={6}>
          <Card className='mt-3 chartCard'>
            <Card.Header>
              User Activity
              <div className='selectContainer'>
                <Form.Select size="sm">
                  <option>Weekly</option>
                </Form.Select>
              </div>
            </Card.Header>
            <div className='secondary-card-header'>
              <p>This Month</p>
              <h4>16,543</h4>
            </div>
            <div className='third-card-header'>
              
              <button type="button" className="btn btn-primary position-relative">
                Current
                <span className="position-absolute top-50 start-0 translate-middle p-2 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
              
              <button type="button" className="btn btn-primary position-relative">
                Previous
                <span className="position-absolute top-50 start-0 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
            </div>
            <Card.Body>
             
                <LineChart chartData={userActivityData} />

            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <Card className='mt-3 chartCard'>
            <Card.Header>
              Order Stats
              <FontAwesomeIcon
                  className='toggleIcon ellipsis'
                  width='18'
                  height='16'
                  icon={faEllipsis}
                />
            </Card.Header>
            <Card.Body>
            <DoughnutChart chartData={donut} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6}>
          <Card className='mt-3 chartCard'>
            <Card.Header>Top Product
            <Form.Select size="sm">
              <option>Monthly</option>
            </Form.Select>
            </Card.Header>
            <Card.Body>

              <div className='topProducts'>

                <div className='d-flex topProductsContainer'>
                  <div className='count'>
                    <p>#1</p>
                  </div>
                  <div className='productContent'>
                    <p>Polo blue T-Shirt</p>
                    <p className='productCost'>$21,456</p>
                  </div>
                </div>

                <div className='productRevenue'>

                  <p>3.82k</p>

                </div>



              </div>

              <div className='topProducts mt-4'>

                <div className='d-flex topProductsContainer'>
                  <div className='count'>
                    <p>#2</p>
                  </div>
                  <div className='productContent'>
                    <p>Polo blue T-Shirt</p>
                    <p className='productCost'>$21,456</p>
                  </div>
                </div>

                <div className='productRevenue'>

                  <p>3.82k</p>

                </div>



              </div>

              <div className='topProducts mt-4'>

                <div className='d-flex topProductsContainer'>
                  <div className='count'>

                    <p>#3</p>

                  </div>

                  <div className='productContent'>

                    <p>Polo blue T-Shirt</p>
                    <p className='productCost'>$21,456</p>

                  </div>
                </div>

                <div className='productRevenue'>

                  <p>3.82k</p>

                </div>



              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </>
  )
}

export default Overview
