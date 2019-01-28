"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NodeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeProperties = NodeProperties;
class Volumes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volumes = Volumes;
class RetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryStrategy = RetryStrategy;
class ContainerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerProperties = ContainerProperties;
class Timeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Timeout = Timeout;
class NodeRangeProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeRangeProperty = NodeRangeProperty;
class MountPoints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoints = MountPoints;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class Ulimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ulimit = Ulimit;
class VolumesHost {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumesHost = VolumesHost;
class JobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Batch::JobDefinition', properties);
    }
}
JobDefinition.NodeProperties = NodeProperties;
JobDefinition.Volumes = Volumes;
JobDefinition.RetryStrategy = RetryStrategy;
JobDefinition.ContainerProperties = ContainerProperties;
JobDefinition.Timeout = Timeout;
JobDefinition.NodeRangeProperty = NodeRangeProperty;
JobDefinition.MountPoints = MountPoints;
JobDefinition.Environment = Environment;
JobDefinition.Ulimit = Ulimit;
JobDefinition.VolumesHost = VolumesHost;
exports.default = JobDefinition;
