import request from '.';

/// TODO: hey dear programmer, modify this services template for your project use or just delete it.
const ExampleServices = {
  get: (id) => request(`/example?id=${id}`),
};

export default ExampleServices;
