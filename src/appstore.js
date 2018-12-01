export const appstore = {
  state: {
    debug: true,
    appName: "papel",
    currentDate: "",

    navLinks: [
      {
        title: "Home",
        url: "/"
      },
      {
        title: "Add New Expense",
        url: "/add"
      },
      {
        title: "View All Expenses",
        url: "/expenses"
      },
      {
        title: "About",
        url: "/aboutus"
      },
      {
        title: "Contact",
        url: "/contactus"
      }
    ],

    expenseStore: [
      {
        title: "lunch",
        cost: 120,
        date: "12/11/2018",
        tags: ["#biriyani", "#friends"]
      },
      {
        title: "football",
        cost: 1400,
        date: "13/11/2018",
        tags: ["#games", "#friends"]
      },
      {
        title: "recharge",
        cost: 399,
        date: "22/11/2018",
        tags: ["#data", "#personal"]
      }
    ],

    currentExpenseObj: {
      title: "",
      cost: "",
      date: "",
      tags: []
    }
  },
  mutations: {
    addNewExpense(state, newObj) {
      if (state.debug) console.log("running: addNewExpense");
      state.expenseStore.push(newObj);
    },
    updateCurrentExpense(state, expObj) {
      if (state.debug) console.log("running: updateCurrentExpense");
      state.currentExpenseObj = expObj;
    }
  }
};
