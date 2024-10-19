const orderRunningRepository = require("../repositories/order_running.repository");


exports.findAll = async () => await orderRunningRepository.findAll();


exports.docGenerate = async (module_name) => {
  var docNumber = "";
  var data = null;
  var running_next = 0;

  const res_doc_module = await orderRunningRepository.findByModuleName(
    module_name
  );

  docNumber =
    res_doc_module.id_prefix +
    res_doc_module.running_year +
    docRunningNext(res_doc_module.running_next);

  running_next = res_doc_module.running_next + 1;
  data = { running_next };
  await orderRunningRepository.update(res_doc_module.id, data);

  return docNumber;
};

function docRunningNext(running_next) {
  var runningNumber = 0;
  var finalRunningNumber = "0";
  //   runningNumber = running_next + 1;
  runningNumber = running_next;

  if (runningNumber < 10) {
    finalRunningNumber = "000" + runningNumber;
  } else if (runningNumber < 100) {
    finalRunningNumber = "00" + runningNumber;
  } else if (runningNumber < 1000) {
    finalRunningNumber = "0" + runningNumber;
  } else if (runningNumber < 10000) {
    finalRunningNumber = runningNumber;
  }
  return finalRunningNumber;
}

