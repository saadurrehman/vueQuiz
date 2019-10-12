<template>
     <header class="header-area">

   

        <div class="classy-nav-container breakpoint-off" style="background-color:black">
            <div class="container">
                <!-- Classy Menu -->
                <nav class="classy-navbar justify-content-between" id="conferNav" style="padding:4.5%">

                    <!-- Logo -->
                    <a class="nav-brand" href="./index.html"><img src="/public/img/core-img/logo.png" alt=""></a>

                    <!-- Navbar Toggler -->
                    <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <!-- Menu -->
                    <div class="classy-menu" style="padding:2.7% 0 12px" >
                        <!-- Menu Close Button -->
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                        <!-- Nav Start -->
                        <div class="classynav" >
                            <ul id="nav" >
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="#">Pages</a>
                                   
                                </li>
                                <li><a href="speakers.html">Speakears</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>

                            <!-- Get Tickets Button -->
                          <router-link to="/createquiz"><button type="button"  style="margin-top:70% !important" class="btn confer-btn-generatequiz mt-3 mt-lg-0 ml-3 ml-lg-5">Generate Quiz <i class="zmdi zmdi-long-arrow-right"></i></button></router-link>
                            
                        </div>
                        
                        <!-- Nav End -->
                    </div>
                </nav>
            </div>
        </div>
    

    </header>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>