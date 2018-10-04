function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    result = [];
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    for(i=0; i < arrPenumpang.length; i++){
      row ={};
      row.penumpang = arrPenumpang[i][0]
      row.naikDari = arrPenumpang[i][1]
      row.tujuan = arrPenumpang[i][2]
      row.bayar = Math.abs(alphabet.indexOf(arrPenumpang[i][1])- alphabet.indexOf(arrPenumpang[i][2])) * 2000
      result.push(row);
    }
  
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]