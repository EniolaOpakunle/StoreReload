import React from 'react'

export default function Fag() {
  return (
    <section className='fag-container container m-auto'>
        <p className=' what-name text-center'>Frequently asked questions (Faqs)</p>
        <div className='my-5 row '>
            <div class="dropdown col-lg-6">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                 What services does storeReload provide?
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div class="dropdown col-lg-6">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                 Can I fund my virtual wallet for future transactions?
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        {/* </div> */}
        {/* <div className='fag-div1 col-lg-6'> */}
                <div class="dropdown col-lg-6">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Can I add my orders to cart for future checkout?
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="dropdown col-lg-6">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    What do I need to get a loan
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
    </section>
  )
}
