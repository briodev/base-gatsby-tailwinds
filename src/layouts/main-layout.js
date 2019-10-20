import React from "react"
import PropTypes from "prop-types"
import "./main-layout.css"

import CompanyContext from '../context/CompanyContext'


const Layout = ({ children }) => {

  return (
    <CompanyContext.Consumer>
      {() => (
          <>
              {/* <Styled.root>  Used for theme */}

              <main>
      
                  {children}
      
              </main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            {/* </Styled.root> */}
            </>
      )}


    </CompanyContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout