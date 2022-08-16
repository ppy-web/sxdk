
import request from "@/utils/request";

export function internshippunch (id) {
  return request({
    url: "/sd-sxsx-manager/afterschoolinternshippunch/v1/get/" + id,
    method: "post",
  });
}