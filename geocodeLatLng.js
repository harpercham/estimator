<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <meta charset=" UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Estimator</title>
</head>

<body>
    <div class="container">
        <div class="jumbotron text-center" style="margin-bottom:0">
            <h1><b> ML PAVING & CONSTRUCTIONS</b></h1><br>
            <u>
                <h2> Anggaran Kos Projek</h2>
            </u><br>

            <div class="row">
                <div class="col-sm-1">
                    <h5> Client:</h5>
                </div>

                <div class="col-sm-3">
                    <input type="text" id="client" value="" size="20">
                </div>
            </div>
            <div class="row">

                <div class="col-sm-1">
                    <h5> Date:</h5>
                </div>
                <div class="col-sm-3">
                    <h5 id="date" value="" size="10"></h5>
                </div>

                <div class="col-sm-1">
                    <h5> Location:</h5>
                </div>
                <div class="col-sm-3">
                    <p id="demo"><button onclick="getLocation()">Show my location</button></p>
                    <input id="latlng" type="text" value="">
                    <button id="submit" onclick="geocodeLatLng()">knvhcmc</button>
                    <div id="out"></div>
                </div>
            </div>

        </div><br><br>

        <ul>
            <h3> Kasaran</h3>
            <div class="row">
                <div class="col-sm-4">
                    <input type="number" class="lengthKas" value="" placeholder="length">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="widthKas" value="" placeholder="width">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="thicknessKas" value="" placeholder="thickness">
                </div>
            </div><br>
            <div class="row">
                <div class="col-sm-4">
                    <input type="number" class="lengthKas" value="" placeholder="length">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="widthKas" value="" placeholder="width">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="thicknessKas" value="" placeholder="thickness">
                </div>
            </div><br>
        </ul>


        <ul>
            <h3> Asphalt</h3>
            <div class="row">
                <div class="col-sm-4">
                    <input type="number" class="lengthAsp" value="" placeholder="length">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="widthAsp" value="" placeholder="width">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="thicknessAsp" value="" placeholder="thickness">
                </div>
            </div><br>
            <div class="row">
                <div class="col-sm-4">
                    <input type="number" class="lengthAsp" value="" placeholder="length">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="widthAsp" value="" placeholder="width">
                </div>
                <div class="col-sm-4">
                    <input type="number" class="thicknessAsp" value="" placeholder="thickness">
                </div>
            </div>
        </ul>


        <div class="p-3 mb-2 bg-info text-white">
            <div class="row">
                <h3 class="col-sm-4" id="kasaran" .lead>Kasaran:</h3>
                <h3 class="col-sm-4" id="volumeKas" .lead>m3</h3>
                <h3 class="col-sm-4" id="weightKas" .lead>ton</h3>
            </div>
        </div>

        <div class="p-3 mb-2 bg-danger text-white">
            <div class="row">
                <h3 class="col-sm-4" id="asphalt" .lead>Asphalt:</h3>
                <h3 class="col-sm-4" id="volumeAsp" .lead>m3</h3>
                <h3 class="col-sm-4" id="weightAsp" .lead>ton</h3>
            </div>
        </div>



        <br>
        <h3>Harga Unit</h3>

        <div class="p-3 mb-2 bg-info text-white">
            <div class="row">
                <h3 class="col-sm-6" id="kasaran" .lead>Kasaran:</h3>

                <div class="col-sm-6">
                    <input type="number" class="unitpriceKas" value="" placeholder="$$">
                </div>
            </div>
        </div>

        <div class="p-3 mb-2 bg-danger text-white">
            <div class="row">
                <h3 class="col-sm-6" id="asphalt" .lead>Asphalt:</h3>

                <div class="col-sm-6">
                    <input type="number" class="unitpriceAsp" value="" placeholder="$$">
                </div>
            </div>
        </div>
        <br>
        <h3>Senarai Harga </h3>

        <div class="p-3 mb-2 bg-dark text-white">
            <div class="row">
                <h3 class="col-sm-6" id="bahan" .lead>Bahan:</h3>
                <div class="col-sm-6">
                    <u>
                        <h3 id="priceBahan" .lead>RM</h3>
                    </u>
                </div>
            </div>

            <div class="row">
                <h3 class="col-sm-6" id="buruh" .lead>Buruh:</h3>
                <div class="col-sm-6">
                    <input type="number" class="priceBuruh" value="" placeholder="$$">
                </div>
            </div>

            <div class="row">
                <h3 class="col-sm-6" id="perangkutan" .lead>Perangkutan:</h3>
                <div class="col-sm-6">
                    <input type="number" class="pricePerangkut" value="" placeholder="$$">
                </div>
            </div>

            <div class="row">
                <h3 class="col-sm-6" id="buruh" .lead>Lain-lain:</h3>
                <div class="col-sm-6">
                    <input type="number" class="priceLain" value="" placeholder="$$">
                </div>
            </div>
        </div>

        <div class="p-3 mb-2 bg-warning text-dark">
            <div class="row">
                <h3 class="col-sm-6" id="jumlah" .lead>Jumlah:</h3>
                <div class="col-sm-6">
                    <u>
                        <h3 id="priceJumlah" .lead>RM</h3>
                    </u>
                </div>
            </div>
        </div>

        <button onclick="calculate()">Calculate </button>
        <button onclick="myFunction()">Print this page</button>

        <script type="text/javascript" src="geocodeLatLng.js"></script>
        <script type="text/javascript" src="calculate.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcyyWSd6ETju45EKjArNtJXAJt5w1xecQ&callback=initMap"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script><br><br><br>
        <h5 align='right '>Sebarang pertanyaan, sila hubungi: <br>Mr Cham: 013-7793898/013-6135258</h5>

    </div>
    <h6>Notis: Harga yang dipaparkan di sini hanya untuk anggaran, kos akhir bergantung kepada sebut harga</h6><br>

    </div>

</body>

</html>
