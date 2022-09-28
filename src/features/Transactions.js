import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Budget from '../components/Budget'

const Transactions = () => {
    const {transactions} = useSelector(state => state.transaction)
    const {category} = useParams()
    console.log(transactions)
    const filteredTransactions =  transactions.filter((t) => category === 'all' || t.type === category) || []
    return (
    <div className="flex flex-col space-y-6">
    {filteredTransactions?.length > 0 ? filteredTransactions.map((d) => {
      console.log(d)
      return (
        <Budget key={d.id || d.title} data={d}/>
      );
    }) : <p>No transactions found</p>}
  </div>
  )
}

export default Transactions