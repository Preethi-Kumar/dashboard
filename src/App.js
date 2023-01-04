import React, { useState } from 'react'
import './App.scss'
import './styles/responsive.scss'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './components/Overview'
import Revenue from './components/Revenue'
import { Container, Row, Col } from 'react-bootstrap'
import DoughnutChart from './components/DoughnutChart'
import SemiDoughnutChart from './components/SemiDoughnutChart'


function App() {
  const [toggle, setToggle] = useState(true)

  function sidebarToggle() {
    setToggle((toggle) => !toggle)
  }
  let toggleCheck = toggle ? ' toggled' : null

  const donut = {
    labels: ['Completed','Pending','Cancel'],
    datasets: [
      {
        label: 'Completed',
        data: [76,24],
        fill: true,
        backgroundColor: ["#447de3","#f4f6f9","#f47a7b"],
        borderRadius: 4,
        lineTension: 0.4,
      }
    ],
  }
  

  return (
    <div className='App'>
      <Sidebar sidebarToggle={sidebarToggle} toggleCheck={toggleCheck} />

      <div className={`main ${toggleCheck}`}>
        <Header sidebarToggle={sidebarToggle} />

        <Container fluid className='dahsboardText mb-3'>
          <Row>
            <Col>
              <h3 className='title'>Dashboard</h3>
            </Col>
          </Row>
        </Container>

        <div className='container-fluid'>
          <div className='row main-content'>
            <div className='col-lg-9 col-md-12 col-sm-12 mb-md-4 ps-0 pe-0'>
              <Revenue />
              <Overview />
            </div>

            <div className='col-lg-3 col-md-12 col-sm-12 rightSidebarContainer'>

              <div className='rightSidebar'>

                <div className='sidebarContent'></div>

                <div className='profile'>

                <img src="/images/avatar.jpeg" />
                  <p className='personName'>Jennifer Bennet</p>
                  <p className='PersonWork'>Product Designer</p>

                </div>

                <div className='row followers'>

                  <div className='col-6 col-md-6 bdRight'>
                    <p>1,269</p>
                    <p className='small'>Products</p>
                  </div>

                  <div className='col-6 col-md-6'>
                    <p>5.2k</p>
                    <p className='small'>Followers</p>
                  </div>

                </div>

                <SemiDoughnutChart  chartData={donut}/>

                <div className='row mt-3'>

                  <div className='col-md-12'>

                    <p className='secondary-title'>Recent Activity</p>

                    <div className='recent'>

                      <div className='date'> 

                        <p>12</p>

                        <p>sep</p>

                      </div>

                      <div className='recentContent'>

                        <p>Lorem ipsum dolor sit amet</p>

                      </div>

                    </div>

                    <div className='recent'>

                      <div className='date'> 

                        <p>12</p>

                        <p>sep</p>

                      </div>

                      <div className='recentContent'>

                        <p>Lorem ipsum dolor sit amet</p>

                      </div>

                    </div>


                  </div>

                </div>


              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
