const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        const searchQuery = form.elements.query.value;
        const config = { params: { q: searchQuery } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

        makeImg(res.data);
        form.elements.query.value = "";

    } catch (error) {
        console.log("Error, error type: ", error);
    }
})

const makeImg = (shows) => {
    for (const result of shows) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium
            document.body.append(img);
        }
    }
}

