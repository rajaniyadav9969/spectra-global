import React from 'react'
import ourStyle from './OurServices.module.scss'

import theme from '../../../JSON/theme_css.json'

const OurServices = () => {
  const { ourServicesImg } = theme

  return (
    <div className={ourStyle.ourServicesMainSection}>
      <div className={ourStyle.ourServicesBanner}>
        <div className={ourStyle.ourServicesBanner1}></div>
        <div className={ourStyle.ourServicesMainHeading}>
          <h1 data-aos="fade-down">Services Offered</h1>
        </div>
      </div>
      <div className={`row ${ourStyle.fundAdvisory}`}>
        <div className={`col-md-6 ${ourStyle.fundAdvisoryContent}`}>
          <h2 className={ourStyle.fundAdvisoryHeading}>Fund Advisory</h2>
          <p>At Spectra Global, our team of subject matter experts provide multi-jurisdictional advisory solutions that helps our clients make informed decisions for their investment structure.</p>
          <p>We are your one stop shop to navigate the regulatory framework and make the most of opportunities. We work with intermediaries from multiple disciplines to help our clients execute their deals seamlessly.</p>
          <p>We provide a comprehensive and a granular level review of the transaction, with respect to the financial structure, tasks, timeline, challenges and solutions with a knack for a relatively low turnaround time.</p>

        </div>
        <div className={`col-md-6 ${ourStyle.fundAdvisoryImg}`}>
          <img
            src={require(`../../../Assets/Img/${ourServicesImg.ourserv_fundadvisory_img}`)}
            alt="welcomeimg"
          />
        </div>
      </div>
      <div className={ourStyle.assetsManagementSection}>
        <div className={ourStyle.assetsManagementContent}>
          <h2 className={ourStyle.assetsManagtHeading}>Asset Management</h2>
          <p className={ourStyle.spectraGlobaloffer}> Spectra Global offer a comprehensive range of services designed to help our wide mix of sophisticated clients optimize their investment portfolios and achieve their financial goals. Our services include:</p>
        </div>
      </div>
      <div className={ourStyle.fundManagementMainSection}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Investment Planning</h2>
            <p className={ourStyle.fundManagementContent}>We work closely with our clients to create a customized investment plan that aligns with their objectives, risk tolerance, and time horizon.</p>
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_investment_img}`)}
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_portfolio_img}`)}
              alt=""
            />
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Portfolio Management</h2>
            <p className={ourStyle.fundManagementContent}>We use a disciplined and systematic approach to manage portfolios that maximizes alpha while minimizing risks.</p>
          </div>
        </div>
      </div>
      <div className={ourStyle.fundManagementMainSection}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Asset Allocation</h2>
            <p className={ourStyle.fundManagementContent}>We use a rigorous asset allocation process to ensure that our clients’ portfolios are diversified across multiple asset classes, including stocks, bonds, and alternative investments.</p>
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_payChart_img}`)}
              alt=""
            />
          </div>

        </div>
      </div>
      <div className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_riskmanagement_img}`)}
              alt=""
            />
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Risk Management</h2>
            <p className={ourStyle.fundManagementContent}>We employ a variety of risk management techniques to help mitigate downside risk and protect our clients’ portfolios in volatile market conditions.</p>
          </div>
        </div>
      </div>
      <div className={ourStyle.fundManagementMainSection}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Performance Reporting</h2>
            <p className={ourStyle.fundManagementContent}>We provide regular performance reports that track portfolio performance against benchmarks and provide transparency into portfolio holdings and performance.</p>
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_performancerep_img}`)}
              alt=""
            />
          </div>

        </div>
      </div>
      <div className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}>
        <div className={`row ${ourStyle.fundManagementSection}`}>
          <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_balancing_img}`)}
              alt=""
            />
          </div>
          <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
            <h2 className={ourStyle.fundManagementHeading}>Ongoing Monitoring and Rebalancing</h2>
            <p className={ourStyle.fundManagementContent}>We continually monitor portfolio holdings and adjust allocations as necessary to ensure that portfolios remain aligned with clients’ investment objectives and risk profiles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices