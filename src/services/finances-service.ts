import api from './api';

const FinanceService = {
  getTransactions: () => api.get('/finance', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
  postTransaction: (newTransaction: any) => api.post('/finance', newTransaction, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
  deleteTransactions: (id: any) => api.delete(`/finance/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
}

export default FinanceService;