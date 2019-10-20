  
import React, { Component } from 'react'
import config from '../../config'


const CompanyContext = React.createContext(config);

class CompanyProvider extends Component {
  render() {

    return (
      <CompanyContext.Provider value={ config }>
        {this.props.children}
      </CompanyContext.Provider>
    )
  }
}

export default CompanyContext
export { CompanyProvider }