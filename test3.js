const userIds = ["U01", "U02", "U03"]; 
const orderIds = ["T01", "T02", "T03", "T04"]; 
const userOrders = [			
{ userId: "U01", orderIds: ["T01", "T02"] },
 	{ userId: "U02", orderIds: [] },
 	{ userId: "U03", orderIds: ["T03"] },
];

const userData = { "U01": "Tom", "U02": "Sam", "U03": "John" } 
const orderData = {						
"T01": { name: "A", price: 499 }, 
"T02": { name: "B", price: 599 },
"T03": { name: "C", price: 699 }, 
"T04": { name: "D", price: 799 }
} 

const result =[]
var userOrdersMap=mapOrder(userOrders);
userOrdersMap.forEach(m=>{
    console.log(m);
})


function mapOrder(userOrders) {
   userOrders.map(k=> {
       var userObj={"id":k.userId,"name":userData[k.userId]}
       var orderObjArr=getOrderObj(orderData, orderIds);//array
       var orderObjArrTmp=[]
       k.orderIds.map(o=>{
        var orderObj=orderObjArr.filter(i=>i.id===o)[0]
        orderObjArrTmp.push(orderObj);
       });
       
       var userOrdersObj={"user":userObj, "orders":orderObjArrTmp}
       result.push(userOrdersObj);
     })
     return result;
    
   }

function getOrderObj(orderData, orderIds){
    var result=[]
    orderIds.map((o)=>{
        var orderObj={"id":o, "name":orderData[o].name, "price":orderData[o].price}
        result.push(orderObj);
    })
    return result;

}   

