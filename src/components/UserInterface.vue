<template>

     <section class="our-schedule-area section-padding-100" >
        <div class="container">
            <div class="row" style="margin-top:20px">
                <!-- Heading -->
                <div class="col-12">
                    <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                      
                        <h4>Quiz Plan</h4>
                        
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                   

                    <!-- Tab Content -->
                    <div class="tab-content" id="conferScheduleTabContent">
                        <div class="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                            <!-- Single Tab Content -->
                            <div class="single-tab-content">
                                <div class="row">
                                    <div class="col-12">
                                        <!-- Single Schedule Area -->
                                        <div v-bind:key v-for="m of mesg" class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            <!-- Single Schedule Thumb and Info -->
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                <!-- Single Schedule Thumb -->
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/10.jpg" alt="">
                                                </div>
                                                <!-- Single Schedule Info -->
                                                <div class="single-schedule-info">
                                                    <h6>{{m.id}}</h6>
                                                    <p>{{m.title}}</p>
                                                </div>
                                            </div>
                                            <!-- Single Schedule Info -->
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> {{m.title}}</p>
                                                <p><i class="zmdi zmdi-map"></i> {{m.title}}</p>
                                            </div>
                                            <!-- Schedule Btn -->
                                <router-link to="/show" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></router-link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
       
    </section>
</template>
 <script src="js/jquery.min.js"></script>
   
    <script src="js/popper.min.js"></script>

    <script src="js/bootstrap.min.js"></script>
 
    <script src="js/confer.bundle.js"></script>
  
    <script src="js/default-assets/active.js"></script>
<script>
import axios from 'axios';
   
export default {
    data(){
        return{
            mesg:[]
        }
           
    },

    async created(){
        try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
            this.mesg=res.data;
        }
        catch(e){
            
        }
    }
}
 /*{
  name:'Dealing with Difficult People',
published_date:'by Gary Armstrong / Ceo of Confer',
date:'12-14 Jan 2019',
location:'Mountain Resort, Phoenix, USA',
  },
   {
name:'Crop Insurance Conference',
 published_date:'by Amanda Hudson / Ceo of Confer',
date:'12-14 Jan 2019',
location:'Mountain Resort, Phoenix, USA',
    },
     {
name:'Capdm Executive Conference',
published_date:'by Martha Burke / Ceo of Confer',
date:'12-14 Jan 2019',
location:'Mountain Resort, Phoenix, USA',
    } */
</script>

<style scoped>


</style>