import React from 'react'
import { useSelector } from 'react-redux'
import { selectContributions } from '../../../Features/ContributeSlice'
import './PrevContributions.css'

function PrevContributions() {

    const contributions = useSelector(selectContributions)

    return (
        <div className='PrevContributions'>
            <div className='update__form__title'>Your Contributions</div>
            <div className='contributions__wrapper'>
                <div className='contri__row__header'>
                    <span>Owner</span>
                    <span>Repo</span>
                    <span>Status</span>
                </div>
                <div className='contri__row__wrapper'>
                    {contributions?.prevContributions?.map((contri, i) => {
                        return (
                            <div key={i} className='contri__row'>
                                <span>{contri?.repo}</span>
                                <span>{contri?.owner}</span>
                                <span>{contri?.status}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PrevContributions