/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLenum = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLboolean = boolean;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLbitfield = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLbyte = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLshort = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLint = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLsizei = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLintptr = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLsizeiptr = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLubyte = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLushort = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLuint = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLfloat = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type GLclampf = number;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type TexImageSource = ImageData;
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type Float32List = Float32Array | GLfloat[];
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type Int32List = Int32Array | GLint[];
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
export interface WebGLContextAttributes {
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    powerPreference?: WebGLPowerPreference;
    failIfMajorPerformanceCaveat?: boolean;
    desynchronized?: boolean;
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLBuffer {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLFramebuffer {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLProgram {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLRenderbuffer {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLShader {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLTexture {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLUniformLocation {
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLActiveInfo {
    readonly size: GLint;
    readonly type: GLenum;
    readonly name: string;
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLShaderPrecisionFormat {
    readonly rangeMin: GLint;
    readonly rangeMax: GLint;
    readonly precision: GLint;
}

/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLRenderingContextBase {
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly POINTS: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly ZERO: GLenum;
    readonly ONE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly FRONT: GLenum;
    readonly BACK: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly CULL_FACE: GLenum;
    readonly BLEND: GLenum;
    readonly DITHER: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly NO_ERROR: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly CW: GLenum;
    readonly CCW: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly VIEWPORT: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly DONT_CARE: GLenum;
    readonly FASTEST: GLenum;
    readonly NICEST: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly BYTE: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly SHORT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly INT: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly FLOAT: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly ALPHA: GLenum;
    readonly RGB: GLenum;
    readonly RGBA: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly NEVER: GLenum;
    readonly LESS: GLenum;
    readonly EQUAL: GLenum;
    readonly LEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly GEQUAL: GLenum;
    readonly ALWAYS: GLenum;
    readonly KEEP: GLenum;
    readonly REPLACE: GLenum;
    readonly INCR: GLenum;
    readonly DECR: GLenum;
    readonly INVERT: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly VENDOR: GLenum;
    readonly RENDERER: GLenum;
    readonly VERSION: GLenum;
    readonly NEAREST: GLenum;
    readonly LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly REPEAT: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RGBA4: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGB565: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly NONE: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly canvas: HTMLCanvasElement | OffscreenCanvas;
    readonly drawingBufferWidth: GLsizei;
    readonly drawingBufferHeight: GLsizei;
    getContextAttributes(): WebGLContextAttributes | null;
    isContextLost(): boolean;
    getSupportedExtensions(): string[] | null;
    getExtension(name: string): any;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getError(): GLenum;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderSource(shader: WebGLShader): string | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
interface WebGLRenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}
/**
 * WebGL 1.0
 * @see https://www.khronos.org/registry/webgl/specs/latest/1.0/
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
export interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}
