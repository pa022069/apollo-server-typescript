export const resolvers = {
  Query: {
    apiStatus: () => {
      return { status: "OK" };
    },
  },
};
