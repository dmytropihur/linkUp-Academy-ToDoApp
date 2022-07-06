const setTasksToLS = (name: string) => {
  localStorage.setItem('user', JSON.stringify({ name }));
};

export default setTasksToLS;
