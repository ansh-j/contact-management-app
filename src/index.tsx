import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import CreateContact from './pages/CreateContact';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Charts from './pages/Charts';
import EditContact from './pages/EditContact';
import { QueryClient, QueryClientProvider } from 'react-query';
import Map from './pages/Map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/createContact',
    element: <CreateContact />
  },
  {
    path: '/chart',
    element: <Charts />,
  },
  {
    path: '/editContact/:id',
    element: <EditContact />
  },
  {
    path: '/map',
    element: <Map/>
  }

]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

