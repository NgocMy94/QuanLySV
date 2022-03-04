/**
 * Dom tới thẻ chứa điểm trung bình trên UI
 * 
 * =>Lưu các điểm trung bình xuống mảng
 */
//C1: sử dụng các thẻ của table
// table -> tbody -> tr -> td(thẻ của HTML)

//Tìm tới thẻ tbody
// var tbody = document.getElementById("tblBody")
// console.log(tbody)
// //Danh sách các tr
// console.log(tbody.rows)
// //Lấy tr đầu tiên
// console.log(tbody.rows[0])
// //Lấy các td
// console.log(tbody.rows[0].cells)  
// //Lấy cell chứa điểm trung bình
// console.log(tbody.rows[0].cells[3].innerHTML)

////C2: sử dụng theo class
//console.log(document.querySelectorAll(".td-scores")document.querySelectorAll(".td-scores"))
//console.log(document.querySelectorAll(".td-scores")[0].innerHTML)

//Global
var scores = []
var tbody = document.getElementById("tblBody")
function layDTB(){
    //Lấy các điểm trung bình 
    var td = document.querySelectorAll(".td-scores")
    for(var i =  0; i < td.length;i++){
        var score = Number(td[i].innerHTML)
        
        scores.push(score)
        console.log(scores);
    }
}
layDTB()

/**
 * Đếm Sinh Viên Giỏi
 * -Xếp loại sinh viên
 * -Đếm sinh viên
 * Khối 1:
 *  mảng dtb
 * Khối 2:
 *  _Tạo hàm xepLoai(dtb)
 *  
 * Duyệt mảng diểm
 *  _Kiểm tra sinh viên => if giỏi => đếm số sv giỏi
 * Khối 3: 
 *  số sv giỏi
 **/
//Xếp Loại

function xepLoai(dtb){
    if(dtb >= 9 && dtb <= 10){
        return "Giỏi"
    }else if(dtb >= 7 && dtb < 9){
        return "Khá"
    }else{
        return "TB"
    }
}
function demSVGioi(){
    var count = 0
    //Duyệt Mảng
    for(var i = 0;i < scores.length;i++){
        var loai = xepLoai(scores[i]);
        if(loai == "Giỏi"){
            count++
        }
    }
    document.getElementById("soSVGioi").innerHTML = count
}
document.getElementById("btnSoSVGioi").onclick = demSVGioi

/**
 * Danh sách sv dtb > 5 
 * _ Duyệt mảng
 * 
 * if dtb > 5
 *    lấy tên sv (vị trí row )
 *    content += tên sv
 */
function danhSachTren5(){
    var content = ""
   
    for(var i = 0;i < scores.length;i++){
        if(scores[i] > 5){
            var tenSV = tbody.rows[i].cells[2].innerHTML
            content += tenSV + "-" +scores[i] +"<br>"
        }
    }
    document.getElementById("dsDiemHon5").innerHTML = content
}
document.getElementById("btnSVDiemHon5").onclick = danhSachTren5

// [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
/**
 * Thuật toán tìm kiếm (linear search - tìm kiếm tuần tự)
 * Mã giả 
 *       Giả sử max là phần tử đầu tiên
 *       Duyệt Mảng
 *            Nếu phần tử còn lại trong mảng > max
 *               max = giá trị mới
 *            Giá trị lớn nhất
 *  
 */
function timMax(){
    var viTri = 0
    var max = scores[0]
    for(var i = 1 ;i < scores.length;i++){
        if(max < scores[i]){
            //Nếu có số lớn hơn giá trị của max
            //Lưu số lớn đó vào max
            max = scores[i]
            viTri = i
        }
    }
    var tenSV =  tbody.rows[viTri].cells[2].innerHTML
    document.getElementById("svGioiNhat").innerHTML = tenSV + " - " +max
}
document.getElementById("btnSVCaoDiemNhat").onclick = timMax

function timMin(){
    var viTri = 0
    var min = scores[0]
    for(var i = 1 ;i < scores.length;i++){
        if(min > scores[i]){
            //Nếu có số lớn hơn giá trị của min
            //Lưu số lớn đó vào min
            min = scores[i]
            viTri = i
        }
    }
    var tenSV =  tbody.rows[viTri].cells[2].innerHTML
    document.getElementById("svYeuNhat").innerHTML = tenSV + " - " +min
}
document.getElementById("btnSVThapDiemNhat").onclick = timMin



/**
 * Thuật toán săp xếp(Buđdle sort - săp xếp nổi bọt)
 * 2 vòng lặp
 * Vòng lơn < array.legth(i)
 *      vòng nhỏ (1 lần kết thúc vòng lặp => 1 giá trị lớn về cuối mảng)
 *             So sánh  2 vị trí liền kề (0-1)
 *                Nếu vị trí 0 > vị trí 1
 *                    hoán chuyển giá trị (lớn  nằm bên phải, nhỏ nằm bên trái)
 *      End (1 lần kết thúc vòng lặp => 1 giá trị lớn về cuối mảng)
 * End ( Mảng sắp xếp tăng dần)
 */
function sapXepTangGian(){
    var mangSX = []
    for(var i = 0 ; i < scores.length;i++){
        mangSX.push(scores[i])
    }
    for(var i = 0 ; i <  mangSX.length;i++){
        for(var j = 0;j <  mangSX.length-1;j++){
            if( mangSX[j] >  mangSX[j + 1]){
                //Nếu giá trị  bên trai lớn hơn bên phải
                //=> Hoán đổi
                var temp =  mangSX[j]
                mangSX[j] =  mangSX[j + 1]
                mangSX[j + 1] = temp
            }
        }
    }
    console.log( mangSX)
    document.getElementById("dtbTang").innerHTML =  mangSX 
}
document.getElementById("btnSapXepTang").onclick = sapXepTangGian
/**
 * Copy giá trị
 */
//number,string,boolean(gán giá trị qua biến mới thì truyền theo kiểu tham trị)
var age = 20
var newAge = age
newAge = newAge + 1
console.log(newAge)
console.log(age)

//Array,ObJect(gán giá trị qua biến mới thì truyền theo kiểu tham chiếu - vùng chưa / địa chị ô nhớ)
//Khi biến được tạo sẽ được cấp phát ô nhớ
var array1 = ["Samsung","iphone"]
var array2 = array1
//console.log(array2)
array2.push("Xiaomi")
console.log(array2)
console.log("Array");
console.log(array1)

//solution :vòng lặp => lấy ra từng phần tử mảng 1 và lưu vào mảng 2
var array3 = [5,7]
var array4 = []
for(var i = 0; i < array3.length;i++){
    array4.push(array3[i])
}
array4.push(6)
console.log(array3)
console.log(array4)

