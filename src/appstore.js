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
        desc: "lunch",
        cost: 120,
        date: "12/11/2018",
        tags: ["#biriyani", "#friends"]
      },
      {
        desc: "football",
        cost: 1400,
        date: "13/11/2018",
        tags: ["#games", "#friends"]
      },
      {
        desc: "recharge",
        cost: 399,
        date: "22/11/2018",
        tags: ["#data", "#personal"]
      }
    ],

    cuurentExpenseObj: {
      desc: "",
      cost: "",
      date: "",
      tags: ""
    }
  },
  mutations: {
    addNewExpense(state) {
      if (state.debug) console.log("running: addNewExpense");
      state.expenseStore.push({});
    }
  }
};