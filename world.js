const countryInput = document.querySelector('#country');
const result = document.querySelector('#result');

function search(type) {
    const country = encodeURIComponent(countryInput.value.trim());
    let url = 'world.php?country=' + country;
    if (type === 'cities') {
        url += '&lookup=cities';
    }

    fetch(url)
        .then(response => response.text())
        .then(data => { result.innerHTML = data; })
        .catch(error => { result.innerHTML = 'Error loading data.'; });
}

document.querySelector('#lookup').addEventListener('click', () => search('country'));
document.querySelector('#lookup-cities').addEventListener('click', () => search('cities'));