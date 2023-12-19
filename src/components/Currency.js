import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }
    return (
        <div className='col-sm'>
                    <select className="form-select form-select-sm text-white bg-success bg-opacity-50 rounded-sm h-16" id="inputGroupCurrency" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    
                <option value="$" name="$ Dollar">$ Dollar</option>
                <option value="£" name="£ Pound">£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            
                  </select>
                    </div>
    )

}

export default Currency