const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");

const sectionTempoInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault(); //impede o autocarregamento da página

  if (!input || !sectionTempoInfo) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter, pelo menos, 3 letras.");
    return;
  }

  try {
    const respose = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=39db5d8fefe57def93e5a50bcef01e13&lang=pt_br&units=metric`
    );

    const data = await respose.json();

    const infos = {
      temperatura: Math.round(data.main.temp),
      local: data.name,
      icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    sectionTempoInfo.innerHTML = `
      <div class="tempo-dados">
        <h2>${infos.local}</h2>
    
        <span>${infos.temperatura}ºC</span>
      </div>        

      <img src="${infos.icone}" alt="" />
    `;

    input.value = ""; //Apaga o texto do imput após o sucesso

  } catch (err) {
    console.log("Deus um erro na obtenção de dados da API.", err);
  } 
});
