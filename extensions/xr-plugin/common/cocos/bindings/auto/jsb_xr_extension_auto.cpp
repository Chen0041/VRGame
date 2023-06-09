// clang-format off

/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (https://www.swig.org).
 * Version 4.1.0
 *
 * Do not make changes to this file unless you know what you are doing - modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

/****************************************************************************
 Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-variable"
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wunused-variable"
#elif defined(_MSC_VER)
#pragma warning(push)
#pragma warning(disable : 4101)
#endif


#define SWIG_STD_MOVE(OBJ) std::move(OBJ)


#include <stdio.h>


#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"
#include "bindings/manual/jsb_global.h"


#include "bindings/auto/jsb_xr_extension_auto.h"



se::Class* __jsb_cc_xr_XrExtension_class = nullptr;
se::Object* __jsb_cc_xr_XrExtension_proto = nullptr;
SE_DECLARE_FINALIZE_FUNC(js_delete_cc_xr_XrExtension) 

static bool js_new_cc_xr_XrExtension(se::State& s) // NOLINT(readability-identifier-naming)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    
    cc::xr::XrExtension *result;
    result = (cc::xr::XrExtension *)new cc::xr::XrExtension();
    
    
    auto *ptr = JSB_MAKE_PRIVATE_OBJECT_WITH_INSTANCE(result);
    s.thisObject()->setPrivateObject(ptr);
    return true;
}
SE_BIND_CTOR(js_new_cc_xr_XrExtension, __jsb_cc_xr_XrExtension_class, js_delete_cc_xr_XrExtension)

static bool js_delete_cc_xr_XrExtension(se::State& s)
{
    return true;
}
SE_BIND_FINALIZE_FUNC(js_delete_cc_xr_XrExtension) 

static bool js_cc_xr_XrExtension_getInstance_static(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *result = 0 ;
    
    if(argc != 0) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
        return false;
    }
    result = (cc::xr::XrExtension *)cc::xr::XrExtension::getInstance();
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getInstance_static) 

static bool js_cc_xr_XrExtension_destroyInstance_static(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    
    if(argc != 0) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
        return false;
    }
    cc::xr::XrExtension::destroyInstance();
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_destroyInstance_static) 

static bool js_cc_xr_XrExtension_getInt8Data(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< int8_t > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getInt8Data(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getInt8Data) 

static bool js_cc_xr_XrExtension_getUInt8Data(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< uint8_t > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getUInt8Data(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getUInt8Data) 

static bool js_cc_xr_XrExtension_getInt32Data(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< int32_t > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getInt32Data(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getInt32Data) 

static bool js_cc_xr_XrExtension_getUInt32Data(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< uint32_t > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getUInt32Data(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getUInt32Data) 

static bool js_cc_xr_XrExtension_getFloat32Data(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< float > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getFloat32Data(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getFloat32Data) 

static bool js_cc_xr_XrExtension_getStringData(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    std::vector< std::string > result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->getStringData(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_getStringData) 

static bool js_cc_xr_XrExtension_querySharedBufferLength(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    uint32_t result;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    result = (arg1)->querySharedBufferLength(arg2);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_querySharedBufferLength) 

static bool js_cc_xr_XrExtension_setXrEventCallback(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    std::function< void (int,int) > *arg2 = 0 ;
    std::function< void (int,int) > temp2 ;
    
    if(argc != 1) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &temp2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    arg2 = &temp2;
    
    (arg1)->setXrEventCallback((std::function< void (int,int) > const &)*arg2);
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_setXrEventCallback) 

static bool js_cc_xr_XrExtension_notifyXrEvent(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    int arg4 ;
    int arg5 ;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    (arg1)->notifyXrEvent(arg2,arg3,arg4,arg5);
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_notifyXrEvent) 

static bool js_cc_xr_XrExtension_syncSharedBufferWithNative_INT8(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    int8_t *arg4 = (int8_t *) NULL ;
    uint32_t arg5 ;
    uint32_t result;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    
    result = (arg1)->syncSharedBufferWithNative_INT8(arg2,arg3,arg4,arg5);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_syncSharedBufferWithNative_INT8) 

static bool js_cc_xr_XrExtension_syncSharedBufferWithNative_INT32(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    int32_t *arg4 = (int32_t *) NULL ;
    uint32_t arg5 ;
    uint32_t result;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    
    result = (arg1)->syncSharedBufferWithNative_INT32(arg2,arg3,arg4,arg5);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_syncSharedBufferWithNative_INT32) 

static bool js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT8(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    uint8_t *arg4 = (uint8_t *) NULL ;
    uint32_t arg5 ;
    uint32_t result;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    
    result = (arg1)->syncSharedBufferWithNative_UINT8(arg2,arg3,arg4,arg5);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT8) 

static bool js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT32(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    uint32_t *arg4 = (uint32_t *) NULL ;
    uint32_t arg5 ;
    uint32_t result;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    
    result = (arg1)->syncSharedBufferWithNative_UINT32(arg2,arg3,arg4,arg5);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT32) 

static bool js_cc_xr_XrExtension_syncSharedBufferWithNative_Float32(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    cc::xr::XrExtension *arg1 = (cc::xr::XrExtension *) NULL ;
    int arg2 ;
    int arg3 ;
    float *arg4 = (float *) NULL ;
    uint32_t arg5 ;
    uint32_t result;
    
    if(argc != 4) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
        return false;
    }
    arg1 = SE_THIS_OBJECT<cc::xr::XrExtension>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg2, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[1], &arg3, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[2], &arg4, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    ok &= sevalue_to_native(args[3], &arg5, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments");
    
    result = (arg1)->syncSharedBufferWithNative_Float32(arg2,arg3,arg4,arg5);
    
    ok &= nativevalue_to_se(result, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_FUNC(js_cc_xr_XrExtension_syncSharedBufferWithNative_Float32) 

bool js_register_cc_xr_XrExtension(se::Object* obj) {
    auto* cls = se::Class::create("XrExtension", obj, nullptr, _SE(js_new_cc_xr_XrExtension)); 
    
    cls->defineStaticProperty("__isJSB", se::Value(true), se::PropertyAttribute::READ_ONLY | se::PropertyAttribute::DONT_ENUM | se::PropertyAttribute::DONT_DELETE);
    
    cls->defineFunction("getInt8Data", _SE(js_cc_xr_XrExtension_getInt8Data)); 
    cls->defineFunction("getUInt8Data", _SE(js_cc_xr_XrExtension_getUInt8Data)); 
    cls->defineFunction("getInt32Data", _SE(js_cc_xr_XrExtension_getInt32Data)); 
    cls->defineFunction("getUInt32Data", _SE(js_cc_xr_XrExtension_getUInt32Data)); 
    cls->defineFunction("getFloat32Data", _SE(js_cc_xr_XrExtension_getFloat32Data)); 
    cls->defineFunction("getStringData", _SE(js_cc_xr_XrExtension_getStringData)); 
    cls->defineFunction("querySharedBufferLength", _SE(js_cc_xr_XrExtension_querySharedBufferLength)); 
    cls->defineFunction("setXrEventCallback", _SE(js_cc_xr_XrExtension_setXrEventCallback)); 
    cls->defineFunction("notifyXrEvent", _SE(js_cc_xr_XrExtension_notifyXrEvent)); 
    cls->defineFunction("syncSharedBufferWithNative_INT8", _SE(js_cc_xr_XrExtension_syncSharedBufferWithNative_INT8)); 
    cls->defineFunction("syncSharedBufferWithNative_INT32", _SE(js_cc_xr_XrExtension_syncSharedBufferWithNative_INT32)); 
    cls->defineFunction("syncSharedBufferWithNative_UINT8", _SE(js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT8)); 
    cls->defineFunction("syncSharedBufferWithNative_UINT32", _SE(js_cc_xr_XrExtension_syncSharedBufferWithNative_UINT32)); 
    cls->defineFunction("syncSharedBufferWithNative_Float32", _SE(js_cc_xr_XrExtension_syncSharedBufferWithNative_Float32)); 
    
    
    cls->defineStaticFunction("getInstance", _SE(js_cc_xr_XrExtension_getInstance_static)); 
    cls->defineStaticFunction("destroyInstance", _SE(js_cc_xr_XrExtension_destroyInstance_static)); 
    
    
    cls->defineFinalizeFunction(_SE(js_delete_cc_xr_XrExtension));
    
    
    cls->install();
    JSBClassType::registerClass<cc::xr::XrExtension>(cls);
    
    __jsb_cc_xr_XrExtension_proto = cls->getProto();
    __jsb_cc_xr_XrExtension_class = cls;
    se::ScriptEngine::getInstance()->clearException();
    return true;
}




bool register_all_xr_extension(se::Object* obj) {
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("xr", &nsVal, true))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("xr", nsVal);
    }
    se::Object* ns = nsVal.toObject();
    /* Register classes */
    js_register_cc_xr_XrExtension(ns); 
    
    /* Register global variables & global functions */
    
    
    
    return true;
}


#if defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic pop
#elif defined(_MSC_VER)
#pragma warning(pop)
#endif
// clang-format on
