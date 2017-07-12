require 'test_helper'

class GiftsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gifts_index_url
    assert_response :success
  end

  test "should get create" do
    get gifts_create_url
    assert_response :success
  end

  test "should get update" do
    get gifts_update_url
    assert_response :success
  end

  test "should get destroy" do
    get gifts_destroy_url
    assert_response :success
  end

  test "should get show" do
    get gifts_show_url
    assert_response :success
  end

end
