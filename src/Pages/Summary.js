import React from 'react';
import { useSearchParams } from 'react-router-dom'

const SummaryPage = () => {
  const [params, setParams] = useSearchParams();
  const pId = params.get('productId');
  const pQty = params.get('qty');

  console.log({
    pId,
    pQty
  })

  return (
    <div className='container my-3'>
      <div className='row'>
        <h3>Summary</h3>
      </div>
      <div className='row mt-4'>
        <div className='col'>
          <div className='col'>
            <div className='row'>
              <p>Payment Request Id</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4'>
          <div>
            <div className='d-flex justify-content-between'>
              <p>your balance</p>
              <p>1223.24 IENO</p>
            </div>
            <br />
          </div>
        </div>
        <div className='col-sm-12 col-md-3'>
          <button className='btn btn-success' type='button' style={{
            width: '100%'
          }}>Pay</button>
        </div>
      </div>
    </div >
  )
}

export default SummaryPage