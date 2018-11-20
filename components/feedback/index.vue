<template>
  <div class="container">
    <div class="imagebg" />
    <div class="row wrap-feedback">
      <div class="col-12 form-container">
        <h2
          v-show="!send"
          class="title is-3 has-text-centered"
        >
          Feedback
        </h2>
        <p
          v-show="!send"
          class="title is-6"
        >
          Vui lòng cung cấp phản hồi của bạn bên dưới:
        </p>
        <form
          v-show="!send"
          id="reused_form"
          role="form"
          method="post"
        >
          <div class="row">
            <div class="col-sm-12 form-group">
              <label>Bạn đánh giá thế nào về trải nghiệm tổng thể của mình?</label>
              <p>
                <label class="radio-inline">
                  <input
                    class="radio_experience"
                    type="radio"
                    name="experience"
                    value="bad">
                  Tệ
                </label>
                <label class="radio-inline">
                  <input
                    class="radio_experience"
                    type="radio"
                    name="experience"
                    value="average">
                  Trung bình
                </label>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="experience"
                    class="radio_experience"
                    value="good">
                  Tốt
                </label>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 form-group">
              <label for="comments"> Nội dung phản hồi:</label>
              <textarea
                id="comments"
                class="form-control"
                type="textarea"
                name="comments"
                placeholder="Your Comments"
                maxlength="6000"
                rows="7" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 form-group">
              <label for="name"> Tên của bạn:</label>
              <input
                id="name"
                type="text"
                class="form-control"
                name="name"
                required>
            </div>
            <div class="col-sm-6 form-group">
              <label for="email"> Email:</label>
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                required>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 form-group">
              <button
                type="submit"
                class="btn btn-lg btn-success btn-block"
                @click="send=!send"
              >
                Gửi phản hồi
              </button>
            </div>
          </div>
        </form>
        <div
          v-show="send"
          id="success_message"
          style="width:100%; height:100%;"
          class="has-text-centered has-text-success"
        >
          <h3>Bạn đã gửi phản hồi thành công!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-feedback {
  margin-top: 200px;
  margin-bottom: 200px;
}
.imagebg {
  background-image: url('/images/slider/slider.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-filter: blur(3px);
  filter: blur(3px);
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.form-container {
  background-color: #fff;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 20px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  padding: 55px;
}
</style>
