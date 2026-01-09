import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: "",
  activeTab: "photos",
  results: [],
  loading: false,
  error: null,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
        state.query = action.payload
    },
    setActiveTab: (state, action) => {
        state.activeTab = action.payload
    },
    setResults: (state, action) => {
        state.results = action.results,
        state.loading = false
    },
    setLoading: (state, action) => {
        state.loading = action.loading,
        state.error = null
    },
    setError: (state, action) => {
        state.error = action.payload,
        state.loading = false
    },
    clearResults: (state) => {
        state.results = []
    }
  },
})

export const { setQuery, setActiveTab, setError, setLoading, setResults } = searchSlice.actions

export default searchSlice.reducer