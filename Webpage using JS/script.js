        //HEADER

        let body = document.getElementsByName('body'),
            header = document.createElement('header'),
            search = document.createElement('input'),
            select = document.createElement('select'),
            option1 = document.createElement('option'),
            option2 = document.createElement('option'),
            option3 = document.createElement('option'),
            option4 = document.createElement('option'),
            button = document.createElement('button');
        search.placeholder = 'Search Item, Zip code...';

        option1.innerHTML = 'All Products';
        option2.value = 'Apple';
        option2.innerHTML = 'Apple';
        option3.value = 'Samsung';
        option3.innerHTML = 'Samsung';
        option4.value = 'OnePlus';
        option4.innerHTML = 'OnePlus';

        select.classList.add('select');
        select.append(option1, option2, option3, option4);

        button.innerHTML = 'Start Selling Now';
        search.setAttribute('type', 'text')
        header.append(select, search, button);
        header.setAttribute('id', 'navBar');
        // APPENDING HEADER

        document.body.appendChild(header);
        header.classList.add('header');

        //PRODUCT DETAILS

        let div = document.createElement('div'),
            details = document.createElement('div'),
            productDetails = document.createElement('div');
        h1 = document.createElement('h1'),
            small = document.createElement('small'),
            loc = document.createElement('img'),
            dot = document.createElement('img'),
            distance = document.createElement('small'),
            view = document.createElement('small'),
            eye = document.createElement('img');
        div.classList.add('div');
        details.classList.add('details');
        productDetails.classList.add('productDetails');
        h1.innerHTML = 'Apple Iphone 11 Pro Max';
        loc.src = 'pin-location-remove-svgrepo-com.svg';
        small.innerHTML = 'San Jose, CA ';
        small.setAttribute('id', 'fade');
        dot.src = 'dot-svgrepo-com.svg';
        distance.innerHTML = ' 5 miles way ';
        view.innerHTML = '14,323 Viewed';
        eye.src = 'eye-viewed-svgrepo-com.svg';
        productDetails.append(h1, loc, small, dot, distance, eye, view);

        let description = document.createElement('span');
        description.innerHTML = `Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollcitudin, erat a <br>
elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et <br>
massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. <br>`;
        description.setAttribute('id', 'description');
        let price = document.createElement('span');
        price.setAttribute('id', 'price');
        price.innerHTML = '$1999.99';
        let color = document.createElement('span');
        color.innerHTML = 'Color:';
        let phoneColor = document.createElement('p');
        phoneColor.setAttribute('id', 'phoneColor');
        let colorButton = document.createElement('span'),
            gray = document.createElement('button'),
            red = document.createElement('button'),
            green = document.createElement('button'),
            silver = document.createElement('button');
        color.setAttribute('id', 'fade');
        gray.setAttribute('id', 'phonecolor');
        gray.classList.add('gray')
        red.setAttribute('id', 'phonecolor');
        red.classList.add('red')
        green.setAttribute('id', 'phonecolor');
        green.classList.add('green')
        silver.setAttribute('id', 'phonecolor');
        silver.classList.add('silver')
        colorButton.append(gray, red, green, silver);
        // console.log(colorButton);
        color.append(phoneColor);
        productDetails.append(description, price, color, colorButton);

        let Delivery = document.createElement('div'),
            del = document.createElement('small'),
            pickup = document.createElement('button'),
            delivery = document.createElement('button');

        pickup.setAttribute('type', 'button');
        del.setAttribute('id', 'fade');
        del.classList.add('delu');
        del.innerText = 'Delivery';
        pickup.setAttribute('id', 'deliveryType');
        delivery.setAttribute('id', 'deliveryType');
        pickup.innerHTML = 'Store Pickup';
        delivery.innerHTML = 'Delivery';
        Delivery.append(del, pickup, delivery);

        let quant = document.createElement('span'),
            minus = document.createElement('button'),
            plus = document.createElement('button'),
            quantity = document.createElement('small'),
            numberspan = document.createElement("p");
        numberspan.innerText = 1;
        numberspan.setAttribute("id", "quantity-area");
        minus.classList.add('minus');
        plus.classList.add('plus');
        minus.innerHTML = '-';
        plus.innerHTML = '+';

        quantity.innerHTML = 'Quantity';
        quant.append(minus, numberspan, plus);

        // console.log(quant);

        let delivered = document.createElement('span'),
            time = document.createElement('small'),
            link = document.createElement('a');

        time.innerHTML = '(2-3 business days, $40 shipping)';
        link.setAttribute('href', "https://en.wikipedia.org/wiki/New_York_City");
        link.innerHTML = 'Newyork, NY';
        delivered.append(time, link);
        // console.log(delivered);

        let buying = document.createElement('div'),
            buynow = document.createElement('button'),
            offer = document.createElement('button');

        let hide = document.createElement('p');
        hide.classList.add('bought');
        hide.innerHTML = `<h3>You already Bought this Item</h3>`
        buynow.innerHTML = 'Buy Now';
        offer.innerHTML = 'Make an Offer';

        buynow.setAttribute('id', 'buyNow');
        offer.setAttribute('id', 'offer');
        buying.append(buynow, offer, hide);

        // console.log(buying);
        //PRODUCT IMAGES

        let gridImg = document.createElement('section'),
            imageGrid = document.createElement('span'),
            img1 = document.createElement('img'),
            img2 = document.createElement('img'),
            img3 = document.createElement('img'),

            span2 = document.createElement('span'),
            imgbig = document.createElement('img');

        //Setting Attributes
        gridImg.classList.add('gridImg');
        imageGrid.classList.add('imageGrid');
        imgbig.classList.add('big');
        img1.src = 'phone1.jpg';
        img2.src = 'phone2.jpg';
        img3.src = 'phone3.jpg';
        imageGrid.append(img1, img2, img3);

        imgbig.src = 'amir-hanna-sweUF7FcyP4-unsplash.jpg';
        span2.append(imgbig);

        gridImg.append(imageGrid, span2);

        div.insertAdjacentElement('afterbegin', gridImg);
        //MODAL FOR OFFER

        let offerModal = document.createElement('div');
        offerModal.classList.add('offerModal');
        offerModal.setAttribute('id', 'offerModal');
        let span1 = document.createElement('span'),
            h4 = document.createElement('h4'),
            ooffer = document.createElement('input');
        ooffer.setAttribute('id', 'offerValue');
        h4.innerHTML = 'Make offer';
        ooffer.setAttribute('id', 'offerValue');

        span1.append(h4, ooffer);
        let address = document.createElement('div');
        address.innerHTML = `Delivery to <br><br>
<span id="deliveryAddress"><small id="fade"><img src="pin-location-remove-svgrepo-com.svg">San
        Jose, CA </small>
    <img src="dot-svgrepo-com.svg"> <small id="fade"> 5 miles way </small></span><br><br>
<span>
    Delivery: $40 <small id="fade">(2-3 business days, $40 shipping)</small><br><br>
    <small id="fade">Payment</small><br>
    <button type="button" id="online">Online</button>
    <button type="button" id="deliveryType">Pay in Person</button>
    <button type="offer" id="submitOffer">Submit Offer</button>
</span>`;

        //APPENDING PRODUCTS DETAILS

        productDetails.append(Delivery);
        offerModal.append(span1, address);
        productDetails.append(quant, delivered, buying, offerModal);
        details.appendChild(productDetails);
        div.appendChild(details)
        header.insertAdjacentElement('afterend', div);

        //Author Details

        let author = document.createElement('div'),
            about = document.createElement('p'),
            seller = document.createElement('p');
        seller.setAttribute('id', 'fade');
        seller.innerHTML = "About the product";
        // about.append(seller, 'Seller details');
        author.classList.add('author');
        author.innerHTML = `<div>
        <img class="img" src="author.jpg">
    </div>
    <div  class="authorprofile">
        <div>
            @store_name
            <p id="fade">4.9(14,565 Reviews)    </p>
                <p id="fade"><img src="pin-location-remove-svgrepo-com.svg">San Jose, CA 5 miles way</p>
        </div>
        <div>
            <p>1,578
            <p id="fade">Item for sale</p></p>
        </div>
        <div class="sales">
            <p>15,165
            <p id="fade">Total Sales</p></p>
        </div>
        <div class="bothButton">
            <button type="button" class="authorButton">Contact</button>
            <button type="button" class="visitButton">Visit Store</button>
        </div>
    </div>`;
        //Appending

        document.body.append(author);

        //SIMILAR PRODUCTS
        let similarGallary = [{
                phone: 'amir-hanna-sweUF7FcyP4-unsplash.jpg'
            },
            {
                phone: 'phone1.jpg'
            },
            {
                phone: 'phone2.jpg'
            },
            {
                phone: 'phone3.jpg'
            },
            {
                phone: 'Rectangle.jpg'
            },
            {
                phone: 'Rectangle-1.jpg'
            },
            {
                phone: 'Rectangle-2.jpg'
            },
            {
                phone: 'phone4.jpg'
            },
            {
                phone: 'phone9.jpg'
            },
            {
                phone: 'phone6.jpg'
            },
            {
                phone: 'phone7.jpg'
            },
            {
                phone: 'phone8.jpg'
            }
        ]

        similarGallary.forEach((image) => {

            var padd = document.createElement('div'),
                similar = document.createElement('div'),

                gallery = document.createElement('div'),
                imga = document.createElement('img'),
                descriiption = document.createElement('div'),
                h4_1 = document.createElement('h4'),
                small_1 = document.createElement('small'),
                img_1 = document.createElement('img'),
                img_2 = document.createElement('img');

            //SETTING UP DATA

            imga.src = image.phone;
            h4_1.innerHTML = 'Apple Iphone 11 Pro Max';
            img_1.src = 'pin-location-remove-svgrepo-com.svg';
            img_2.src = 'eye-viewed-svgrepo-com.svg';

            //SETTING ATTRIBUTES
            small_1.setAttribute('id', 'fade');
            similar.classList.add('similar');
            padd.classList.add('padd');
            gallery.classList.add('gallery');
            imga.classList.add('imga');


            //APPENING SIMILAR PRODUCTS
            small_1.append(img_1, '  5 miles way  ', img_2, '  14,323 Viewed');
            descriiption.append(h4_1, small_1);
            gallery.append(imga, descriiption);
            similar.append(gallery);
            padd.append(similar);
            author.insertAdjacentElement('afterend', padd);
        })
        // }

        //FOOTER
        let foot = document.createElement('div');

        let hr = document.createElement('hr');
        foot.append(hr);
        foot.innerHTML = `<div class="promises"><p>
        <img src="delivery-svgrepo-com.svg" width="20px" height="20px">
        Fast & Free delivery</p>
        <small>Free delivery for all orders over $200</small>
        <p><img src="money-svgrepo-com.svg" width="20px" height="20px">
        Money back guarantee</p>
        <small>We return money within 30 days</small>
        <p><img src="headphone-svgrepo-com.svg" width="20px" height="20px">
        24/7 customer support</p>
        <small>Friendly 24/7 customer support</small>
    </div>`;

        let links = document.createElement('div'),
            usefull = document.createElement('h4');
        usefull.innerHTML = 'Usefull Links';

        links.classList.add('links');

        let lists = [{
                li: "Home"
            },
            {
                li: 'About Us'
            },
            {
                li: 'Terms and Conditions'
            },
            {
                li: 'FAQ'
            },
            {
                li: 'Privacy Policies'
            },
            {
                li: 'Shipping & Returns'
            },
            {
                li: 'Contact Us'
            }
        ]
        lists.forEach((list) => {
            let listing = document.createElement('li');
            listing.innerHTML = list.li;
            usefull.append(listing);
        });
        links.append(usefull);
        foot.append(links);

        shopers = [{
                li: 'Electronics'
            },
            {
                li: 'Vacancies'
            },
            {
                li: 'Real State'
            },
            {
                li: 'Vehicles'
            },
            {
                li: 'Other Services'
            },
            {
                li: 'Free Stuffs'
            }
        ]
        let shopping = document.createElement('div'),
            heading = document.createElement('h4');
        heading.innerHTML = 'Online Shopping';
        shopping.classList.add('shopping');

        shopers.forEach((shop) => {
            let listing = document.createElement('li');
            listing.innerHTML = shop.li;
            heading.append(listing);
        });
        shopping.append(heading);

        foot.append(shopping);

        document.body.append(foot);

        let copyright = document.createElement('div'),
            copy = document.createElement('div'),
            silos = document.createElement('p');
        copyright.classList.add('copyright')
        copy.classList.add('copy');
        silos.innerHTML = 'silos.com/copyright 2021. All rights Reserved';
        copy.append(silos);
        copyright.append(copy);

        let icon = document.createElement('div'),
            icon1 = document.createElement('p'),
            icon2 = document.createElement('p'),
            icon3 = document.createElement('p'),

            fb = document.createElement('img'),
            twitter = document.createElement('img'),
            insta = document.createElement('img');

        icon.classList.add('icon');
        fb.src = "facebook.svg";
        twitter.src = "twitter.svg";
        insta.src = "instagram.svg";

        icon1.append(fb);
        icon2.append(twitter);
        icon3.append(insta);
        icon.append(icon1, icon2, icon3);
        copyright.append(icon);
        document.body.append(copyright);

        // Events
        offer.addEventListener('click', () => {
            offerModal.classList.toggle('offerModal')
        })
        document.querySelector('.gray').addEventListener('click', () => {
            phoneColor.innerHTML = 'You Selected Gray';
        })
        document.querySelector('.red').addEventListener('click', () => {
            phoneColor.innerHTML = 'You Selected Red';
        })
        document.querySelector('.green').addEventListener('click', () => {
            phoneColor.innerHTML = 'You Selected Green';
        })
        document.querySelector('.silver').addEventListener('click', () => {
            phoneColor.innerHTML = 'You Selected Silver';
        })

        delivery.addEventListener('click', () => {
            alert('You selected Delivery');
        });

        pickup.addEventListener('click', () => {
            alert('You selected Pick-up Service')
        })

        img1.addEventListener('click', () => {
            const temp = imgbig.src;
            console.log(temp);
            imgbig.src = img1.src;
            img1.src = temp;
            console.log(imgbig);
        });
        img2.addEventListener('click', () => {
            const temp = imgbig.src;
            imgbig.src = img2.src;
            img2.src = temp;
        });
        img3.addEventListener('click', () => {
            const temp = imgbig.src;
            imgbig.src = img3.src;
            img3.src = temp;
        });

        plus.addEventListener('click', () => {
            let counter = Number(numberspan.innerHTML);
            counter = counter + 1;
            numberspan.innerHTML = counter;
        });
        minus.addEventListener('click', () => {
            let counter = Number(numberspan.innerHTML);
            if (counter > 1) {
                counter = counter - 1;
                numberspan.innerHTML = counter;
            }
        })
        buynow.addEventListener('click', () => {
            buynow.classList.add('btnBuy');
            hide.classList.toggle('bought');
        })
