import api from './api';

const FinanceService = {
  getTransactions: (headers: any) => api.get('/finance', headers),
  postTransaction: (headers: any) => api.post('/finance', headers),
  deleleTransactions: (headers: any) => api.delete('/finance', headers)
}

export default FinanceService;