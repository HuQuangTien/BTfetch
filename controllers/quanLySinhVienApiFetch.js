async function getAllSinhVienAsync() {
    const response = await fetch('https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien');
    const data = await response.json();
    console.log(data)
};
getAllSinhVienAsync();


async function insertSinhVienAsync(sinhVienOb) { //format sinh viên api
    const response = await fetch('https://svcy.myclass.vn/api/SinhVienApi/themSinhVien',{
        method:'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(sinhVienOb)
    });
    const data = await response.json();
    console.log(data);
}

let obCreate = {
    "maSinhVien": "5312",
    "tenSinhVien": "khải udpate",
    "loaiSinhVien": "string",
    "diemToan": 10,
    "diemLy": 10,
    "diemHoa": 10,
    "diemRenLuyen": 10,
    "email": "khai@gmail.com",
    "soDienThoai": "07070707"
  }

//   insertSinhVienAsync(obCreate);

async function updateSinhVienAsync (id,obUpdate){ 
    const response = await fetch(`https://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(obUpdate)
    });
    const data = await response.json();
    console.log(data);
}
let obUpdate = {...obCreate};
obUpdate.tenSinhVien = 'AAAAA'
updateSinhVienAsync(5312,obUpdate)

async function deleteSinhVienAsync(id) {
    const response = await fetch(`https://svcy.myclass.vn/api/SinhVienApi/xoaSinhVien?maSinhVien=${id}`, {
        method:'DELETE'
    });

    const data = await response.json();
    console.log(data);

}

deleteSinhVienAsync(1);