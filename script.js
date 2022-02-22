/**
 * Devs daata select options dinamic value
 */

axios.get('https://my-json-server.typicode.com/DevZonayed/devs_api/skills').then(res => {
    let s_root = document.querySelector('#uskill');
    let allOptions = '';
    res.data.map(items => {
        allOptions += `
        <option value="${items.id}">${items.skill}</option>
        `
    }) 
    s_root.insertAdjacentHTML('beforeend' , allOptions);
})

/**
 * Data Send To Server
 */

let inputForm = document.querySelector('#devs_form_data');
inputForm.onsubmit = (e) => {
    e.preventDefault();
    let u_name = inputForm.querySelector('#uname');
    let u_skill = inputForm.querySelector('#uskill');
    let u_location = inputForm.querySelector('#ulocation');
    if(u_name.value == '' || u_skill.value == '' || u_location.value == '' ){
        alert('All Filds are requared')
    }else{
        axios.post('https://my-json-server.typicode.com/DevZonayed/devs_api/devs' , {
        "id"        :'',
        "name"      : u_name.value ,
        "skill"   :u_skill.value,
        "location"  : u_location.value,
    }).then(() => {
        dataShow()
    })
    }
}

/**
 * Data Show
 */
 dataShow()
function dataShow(){
    axios.get('https://my-json-server.typicode.com/DevZonayed/devs_api/devs').then(res => {
        let devs_ground = document.querySelector('#devs_ground');
        let allDevs = '';
        res.data.map(devs => {
            allDevs += `
            <tr>
                <td>${devs.id}</td>
                <td>${devs.name}</td>
                <td>${devs.skill}</td>
                <td>${devs.location}</td>
                <td>
                    <button onclick="devs_edit(${devs.id})" class="btn btn-warning">Edit</button>
                    <button onclick="devs_delete(${devs.id})" class="btn btn-danger">Delete</button>
                </td>
            </tr>
            `;
        })
        devs_ground.innerHTML = allDevs;
    })
}
