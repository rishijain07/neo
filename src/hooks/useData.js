import data from '../data.json'

const useData = ({ id }) => {

  if (id) {
    return {
      data: data.find(item => item.id === id)
    }
  }

  return {
    data
  }
}

export default useData