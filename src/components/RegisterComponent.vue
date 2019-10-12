<template>
    

<!------ Include the above in your HEAD tag ---------->


                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register</h3>
                                <div class="row register-form ">
                                    <div class="offset-md-2 col-md-8" >
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                         <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Password *" value="" />
                                        </div>
                                        
                                    </div>
                                    <div class="offset-md-2 col-md-4 ">
                                         <div>
                                            <router-link to="/login"><p>
                                               Already have an account?
                                            </p></router-link>
                                            </div>
                                    </div>
                                    <div class="offset-md-2 col-md-6">
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        
                       
                
</template>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script type="text/javascript">
    $(document).ready(function(){
      $("#home-tab").click(function(){
        console.log('hi');
      });
    });
    </script>
<script>

   

export default {

    
}

</script>
<style scoped>
@import url('//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');

</style>