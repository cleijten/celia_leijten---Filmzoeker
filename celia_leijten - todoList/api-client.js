const base_endpoint = "http://localhost:3000/";

const getToDos = async () => {
  try {
    const res = await fetch(base_endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const postToDo = async (task) => {
  const data = { description: task, done: false };

  try {
    const res = await fetch(base_endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteToDo = async (id) => {
  const APIEndpoint = `${base_endpoint}${id}`;

  try {
    return await fetch(APIEndpoint, {
      method: "DELETE",
    });
  }catch (error) {
    console.log(error);
  }
}

const putToDo = async (id, done) => {
  const APIEndpoint = `${base_endpoint}${id}`;
  const data = { done: done };

  try {
    const res = await fetch(APIEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
