# Architecture Diagram

This document provides a visual representation of the architecture and concepts taught in this application.

## 1. React Context API
```
[ThemeContext] ---> [ChildComponent]
[AuthContext] ---> [AuthComponent]
[MyContext] ---> [Grandparent]
```

## 2. CRUD Operations
```
[BankUser]
  |---> [CreateUser]
  |---> [ListUser]
State: users, formData, editingUserId
```

## 3. Custom Hooks
```
[useFetch] ---> [FetchDemo]
[useForm] ---> [FormDemo]
[useLocalStorage] ---> [useLocalStorageDemo]
```

## 4. Performance Optimization
```
[useMemo] ---> [useMemoDemo]
[useCallback] ---> [useCallBackDemo]
[React.memo] ---> [reactMemoDemo]
```

## 5. Higher-Order Components (HOC)
```
[withAuthentication] ---> [AuthenticationDemo]
[withLogger] ---> [LoggerDemo]
```

## 6. Data Grids
```
[AgGridComponent]
[BasicTableComponent]
```

## 7. Redux Basics
```
[store.js]
  |---> [ToDoList]
Actions ---> Reducer ---> Store
```

## 8. Redux Toolkit
```
[toolkitStore.js]
  |---> [Counter]
[createSlice] ---> [configureStore]
```

## 9. Async Logic with Redux Toolkit
```
[asyncToolkitStore.js]
  |---> [AsyncCounter]
[createAsyncThunk] ---> [extraReducers]
```

## Further Visualizations

### React Context API
```
[ThemeContext] ---> [ChildComponent]
[AuthContext] ---> [AuthComponent]
[MyContext] ---> [Grandparent]
```

### CRUD Operations
```
[BankUser]
  |---> [CreateUser]
  |---> [ListUser]
State: users, formData, editingUserId
```

### Redux Basics
```
[store.js]
  |---> [ToDoList]
Actions ---> Reducer ---> Store
```

### Redux Toolkit
```
[toolkitStore.js]
  |---> [Counter]
[createSlice] ---> [configureStore]
```

### Async Logic with Redux Toolkit
```
[asyncToolkitStore.js]
  |---> [AsyncCounter]
[createAsyncThunk] ---> [extraReducers]
```
