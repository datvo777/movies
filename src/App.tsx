import './styles/app.scss'
import Toast from './components/Toast/Toast'
import AppRoutes from './routes/App.routes'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient({
    defaultOptions:  {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toast />
    </QueryClientProvider>
  )
}

export default App
