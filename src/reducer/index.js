const initState = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    taxs: 8.92,
    total: 108.03,
    zip: 95084
  },
  details: {
    discription:
      "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    qty: 1,
    img:
      "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    price: "",
    final_price: 102.96
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "APPLY_CODE":
      return {
        pricing: {
          subtotal: 102.96,
          savings: 3.85,
          taxs: 8.92,
          total: 104.18,
          zip: 95084
        },
        details: {
          discription:
            "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
          qty: 1,
          img:
            "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: 102.96,
          final_price: 99.11
        }
      };
    case "DEL_CODE":
      return {
        ...initState
      };
    default:
      return state;
  }
};

export default reducer;
